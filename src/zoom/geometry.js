const get_geometry = (box) => {

  const rect = box.getBoundingClientRect();
  const y0_prime = rect.top;
  const x0_prime = rect.left;
  const y0_prime_plus_h = rect.bottom;
  const x0_prime_plus_w = rect.right;
  
  const w = x0_prime_plus_w - x0_prime;
  const h = y0_prime_plus_h - y0_prime;
  
  const x0 = x0_prime + w/2;
  const y0 = y0_prime + h/2;
  
  const final_gap = 20;

  // The money formula

  const screen = window.screen;

  let s;
  if (screen.width < screen.height) // Scale smaller of two dimensions
    s = (screen.width - 2*final_gap) / w;
  else
    s = (screen.height - 2*final_gap) / h;

  const screen_center_x = screen.width/2 - x0;
  const screen_center_y = screen.height/2 - y0;
  
  // console.log(`(screen_width, screen_height): (${screen.width}, ${screen.height})`);
  // console.log(`
  //   y0_prime: ${y0_prime}, 
  //   x0_prime: ${x0_prime}, 
  //   y0_prime_plus_w: ${y0_prime_plus_h}, 
  //   x0_prime_plus_h: ${x0_prime_plus_w}
  // `);
  // console.log(`(w, h): (${w}, ${h})`);
  // console.log(`(x0, y0): (${x0}, ${y0})`);
  // console.log(`final_gap: ${final_gap}`);
  // console.log('s = ', s);
  // console.log('s*w = ', s*w);

  const geometry = {screen_center_x, screen_center_y, scale: s};
  return geometry;
};

export default get_geometry;