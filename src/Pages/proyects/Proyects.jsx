import './proyects.css'

const Proyects = () => {

  const imgLemgth = 6;
  const imgArr = [];

  for (let i = 1; i <= imgLemgth; i++) {
    imgArr.push(require(`../../Image/Img_proyects/proyect${i}.png`))
  }

  return (
    <div className='container__proyects'>
      <h2 className='proyects__title'>Proyects</h2>
      <div className='proyect-grid'>
        {
          imgArr.map((images, index) =>{
            return(
              <div className='proyects'>
                <div key={index} className="proyects__img">
                  <img src={images} alt={`Proyects Images ${index + 1}`} />
                  <h4>Description</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, saepe iure excepturi ad quidem quos vero natus veritatis deleniti enim! Vitae sit dolorum perspiciatis quo officia molestiae officiis deserunt laboriosam?
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Proyects