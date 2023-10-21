import Footer from './Footer';
import ProfileClass from './ProfileClass';

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__head">What do we do?</div>
        <div className="about__desc">At <span className='about__desc about__desc--name'>goodfood</span>, we are passionate about bringing the world's flavors to your doorstep. We believe that great food has the power to connect people, inspire conversations, and create unforgettable memories. Our journey started with a simple yet profound idea: to make food delivery not just a service but an experience that delights your taste buds and simplifies your life.</div>
        <ProfileClass />
      </div>
      <Footer type="fixed"/>
    </>
  )
}

export default About;