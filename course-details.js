 const tabContentData = [
    {
        name: 'overview',
        content: 
                `<div class="tab-content tab-content-active" >
                    <h2>Course Description</h2>
                    <p>Calling nothing end fertile for venture way boy. Esteem spirit temper too say adieus who direct esteem. It esteems luckily mr or picture placing drawing no. Apartments frequently or motionless on reasonable projecting expression. Way mrs end gave tall walk fact bed.</p>
                    <p>Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as.</p>
                </div> `
    },
     
    {   name: 'curriculum',
        content:
                `<div class="tab-content">
                    <p>Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as.</p>
                </div>`
    },

    {   name: 'advisor',
        content:
                `<div class="tab-content">
                    <p>Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described</p>
                </div>`
    },

    {   name: 'reviews',
        content:
                `<div class="tab-content">
                    <p>Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as.</p>
                </div>`
    },
 ]
 
 const tabButtons = document.querySelectorAll('.tab-btn');
 const tabContents = document.querySelectorAll('.tab-content');


/**
 * removes 'tab-active' class from all the elements
 */
const removeActiveTab = () => {

    tabButtons.forEach(element => {
        element.classList.remove('tab-active')

    });
}


const hideAllTabContent = () => {
  
    tabContents.forEach(content => {
        content.classList.remove('tab-content-active')
    });
}



/**
 * 
 * @param {String} name - name of tab to add active class
 */
const addActiveClass = (name) => {
    renderTabContent(name)
   const selectedTab = document.getElementsByName(name)
   
selectedTab[0].classList.add('tab-active')
}

tabButtons.forEach(el=> {
   el.addEventListener('click', (event)=> {
        removeActiveTab()
        hideAllTabContent()
        addActiveClass(event.currentTarget.name) 
    })
})


const renderTabContent = (tabName) => {
    const tabContentContainer = document.getElementById('tabContentContainer')
    const selectedTabContent = tabContentData.find(item=> item.name === tabName)

    tabContentContainer.innerHTML = selectedTabContent.content
}


