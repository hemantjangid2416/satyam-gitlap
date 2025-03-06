const screenWidth = window.screen.width;
let isMobileScreen = true;
if(screenWidth < 481){
    isMobileScreen = true;
  } else {
    isMobileScreen = false;
  }

export default isMobileScreen;