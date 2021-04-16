
const burgers = [
    {
      img: './pictures/menu-burger.jpg',
      name: 'Mini cheese Burger',
      price:'$9.00',
      description:'Lorem ipsum dolor sit amet elit. Phasel nec preti facil',
    },
    { img: './pictures/menu-burger.jpg',
    name: 'Mini cheese Burger',
    price:'$9.00',
    description:'Lorem ipsum dolor sit amet elit. Phasel nec preti facil',},
    { img: './pictures/menu-burger.jpg',
    name: 'Mini cheese Burger',
    price:'$9.00',
    description:'Lorem ipsum dolor sit amet elit. Phasel nec preti facil',},
    { img: './pictures/menu-burger.jpg',
    name: 'Mini cheese Burger',
    price:'$9.00',
    description:'Lorem ipsum dolor sit amet elit. Phasel nec preti facil',},
    { img: './pictures/menu-burger.jpg',
    name: 'Mini cheese Burger',
    price:'$9.00',
    description:'Lorem ipsum dolor sit amet elit. Phasel nec preti facil',},
  ];
  
  function renderBurger (array){
    for(let i=0;i<=array.length-1;i++){
      const wraper = document.createElement('div') ;
      const menuItem = document.createElement('div');
      const img = document.createElement('img');
      const menuText = document.createElement('div');
      const title = document.createElement('h3');
      const name = document.createElement('span');
      const price = document.createElement('strong');
      const description = document.createElement('p');
      wraper.classList.add("wraper");
      menuItem.classList.add('menu-item');
      img.classList.add('picture1');
      img.setAttribute('src', array[i].img);
      img.setAttribute('alt', 'food photo');
      menuText.classList.add("menu-text");
      name.textContent=array[i].name;
      price.textContent=array[i].price;
      description.textContent=array[i].description;
      menuItem.append(img);
      title.append(name,price);
      menuText.append(title,description);
      wraper.append(menuItem,menuText);
      const parentElement =document.querySelector('.outerwraper').firstElementChild;
      parentElement.insertAdjacentElement('afterbegin', wraper);
}
    
  }

  renderBurger(burgers);
  
  /* <div class="wraper">
        <div class="menu-item">
          <img src="./pictures/menu-burger.jpg" class="picture1" alt="Image">
        </div>
        <div class="menu-text">
         <h3><span>Mini cheese Burger</span> <strong>$9.00</strong></h3>
          <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
        </div>
  </div> */