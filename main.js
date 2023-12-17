const horrificHexCodes = [
  '#FF0000', // Red
  '#00FF00', // Green
  '#0000FF', // Blue
  '#FFFF00', // Yellow
  '#FF00FF', // Magenta
  '#00FFFF', // Cyan
  '#FF4500', // OrangeRed
  '#9400D3', // DarkViolet
  '#FF1493', // DeepPink
  '#8B0000', // DarkRed
  '#8A2BE2', // BlueViolet
  '#8B008B', // DarkMagenta
  '#008080', // Teal
  '#800080', // Purple
  '#800000', // Maroon
  '#00FF7F', // SpringGreen
  '#FF6347', // Tomato
  '#9932CC', // DarkOrchid
  '#1E90FF', // DodgerBlue
  '#008000'  // Green
];


const generateRandomColor = () => {
  const randomColor = horrificHexCodes[Math.floor(Math.random() * horrificHexCodes.length)];
  return randomColor;
};

const navItems = document.querySelectorAll(".item");
const inputField = document.querySelectorAll(".inputField")
const changeBackgroundColor = () => {
  navItems.forEach(item => {
    item.style.backgroundColor = generateRandomColor();
  });
  inputField.forEach(item => {
    item.style.backgroundColor = generateRandomColor();
  });
};

navItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.display = "none";
  });
});

const audio = document.getElementById('scrollAudio');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
    setInterval(changeBackgroundColor, 20);
  }
  

window.addEventListener('scroll', handleScroll);


;
const popup = document.getElementById('popup');
const popupTrigger = document.getElementById('rickRoll');


function createPopup() {
const popupContainer = document.querySelector('#popup-container')
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = '<img src="https://media0.giphy.com/media/LXONhtCmN32YU/200.webp?cid=ecf05e4778urj7srs0435au5sqpb1r7gkpw51lh4kwtdil0u&ep=v1_gifs_search&rid=200.webp&ct=g" alt="">'

  // Add styles to position the popups randomly around the hovered element
  const xPos = Math.floor(Math.random() * 1000) + 'px';
  const yPos = Math.floor(Math.random() * 1000) + 'px';
  popup.style.top = yPos;
  popup.style.left = xPos;

  popupContainer.appendChild(popup);

  return popup;
}

popupTrigger.addEventListener('click', () =>{
    if (audio){
         audio.pause()
        }
        const ad = document.getElementById("RickAudio")
        if (ad){
            ad.play()
        }
        const popupLength = document.getElementsByClassName("popup")
        if (popupLength.length < 50){
        setInterval(createPopup, 50)
        }
    
})

const body = document.getElementsByTagName("body");
body.addEventListener("mouseover", () => {
    if (isInViewport(audio)) {
    audio.play();
    
}
})