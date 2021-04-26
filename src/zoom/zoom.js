import get_geometry from './geometry.js';
import setup_cards from './cards.js'

let count = 0;
let timeline;
const setup_zoom_on_cards = (data_full) => {

  const cards = setup_cards(data_full);
  cards.forEach((card) => {
  
    card.addEventListener('click', () => {
      
      // console.log('count: ', count);
      
      const geometry = get_geometry(card);
  
      if (count === 0) {
        const cards_overlay = document.querySelector('.cards-overlay');
        cards_overlay.style.zIndex = 2;
        timeline = gsap.timeline();

        // Fade background overlay
        timeline.to('.cards-overlay', {
          backgroundColor: 'rgba(0, 0, 0, 1)',
          onStart: () => {
            card.style.zIndex = 3;
          },
          onReverseComplete: () => {
            card.style.zIndex = 1;
            cards_overlay.style.zIndex = 0;
          }
        });
    
        // Shift and scale card:
        timeline.to(card, {
          x: geometry.screen_center_x,
          y: geometry.screen_center_y, // shift further when change height (below)
          scale: geometry.scale,
        }, '<');

        const num_details = 5;
        // const img = card.querySelector('.card__content-container:nth-child(2) img');  
        const info_1 = card.querySelector('.card__content-container:nth-child(1)');
        const info_2 = card.querySelector('.card__content-container:nth-child(2)');
        const info_3 = card.querySelector('.card__content-container:nth-child(3)');

        timeline.to([info_1, info_2, info_3], {
          height: () => {
            const height = card.offsetHeight;
            return height / num_details;
          },
          backgroundColor: 'orange'
        });

        // Expand card height and shift to account for new height
        const expanded_card_height = screen.height * 0.3;
        timeline.to(card, {
          height: expanded_card_height,
          // y: 0, // shift y to account for new height
          onComplete: () => {
            card.style.overflowY = 'scroll'
          },
          onReverseComplete: () => {
            // console.log('reverse complete, card.scrollTop: ', card.scrollTop);
            card.style.overflowY = 'hidden';

            const tl = gsap.timeline();
            tl.to(card, {scrollTop: 0});
          }
        }, '<');


      } else {
        timeline.reverse();
      }
    
      count = (count + 1) % 2;
    });
  });

};

export default setup_zoom_on_cards;