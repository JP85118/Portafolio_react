import './about.css'
import MyImage from '../../Image/phto.jpg'
import { data } from './data'

const About = () => {
  return (
    <div className='about__container'>
      <div className='about__image'>
        <img src={MyImage} alt=" My Image" />
      </div>
      <div className='about__paragraph'>
        <h2 className='about__subtitle'>I'm <span>Javier Alejandro</span></h2>
        <p>
          Sit amet consectetur adipisicing elit. Numquam debitis commodi dolor corporis, ea exercitationem nulla possimus fuga tempora minus expedita voluptatibus! Corrupti quaerat vitae consequatur laborum, iste nobis hic.
          Dolor sit amet consectetur adipisicing elit. Molestiae saepe et dolores debitis velit odio. Modi unde, odit repudiandae non quibusdam itaque quam beatae eius nisi, deleniti quis? Commodi, labore!
        </p>
        <p>
          Sapiente blanditiis numquam sed praesentium dolor perspiciatis illum recusandae eius laboriosam hic molestiae cupiditate atque mollitia voluptatem, eligendi saepe.
          Mollitia ad quae maxime earum odit dolorem pariatur facere eos dolore, perspiciatis nihil! Facere beatae deleniti aperiam adipisci dolores?
        </p>
        Ipsum dolor sit amet, consectetur adipisicing elit. Officia sequi minima quaerat adipisci corrupti quae, deleniti, ratione ab voluptatem possimus hic corporis maiores ipsa totam. Sint exercitationem recusandae harum quidem?
      </div>
      <div className='about__icon'>
        {
          data.map(item => <a key={item.id} href={item.link} target="_blank" rel='noopener noreferrer'>{item.icon}</a>)
        }
      </div>
    </div>
  )
}

export default About