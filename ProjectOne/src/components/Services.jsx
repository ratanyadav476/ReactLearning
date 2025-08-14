import React from 'react'
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"
import image7 from "../images/image7.jpg"
import image8 from "../images/image8.jpg"
import image9 from "../images/image9.jpg"
import Contact from "../components/Contact.jsx"

function Services() {
  return (
    <div>

      <div className='w-full mt-10 mb-8 flex justify-between items-center font-semibold '>
        <div className='w-[400px]   bg-gray-700 p-4 rounded-3xl  shadow-lg shadow-cyan-500/50 pb-4  '>
          <img src={image2} alt="" className=' rounded-3xl ' />
        </div>
        <div className='w-[700px] h-[300px] items-center  '>

          <h4 className='text-2xl text-green-400 font-bold pt-4 '>
            Wheel Chair Support
          </h4>
          <p className='text-gray-400 p-4'>
            Our tourist bus service provides a safe, comfortable,and
            inclusive travel experience. All buses are AC with push-
            back seats,charging points, and entertainment. For diffe
            rently-abled (handicapped) passengers, we offer special
            wheelchair-accessible features, including a ramp for easy
            boarding and a secure space inside the bus for wheelchairs
            . Our trained staff assists with boarding, seating, and lug
            gage. We maintain high hygiene standards with regular
            sanitization, and safety tools like fire extinguishers and
            first-aid kits are always onboard. We also provide city tours,
            outstation packages, and group bookings, making your
            journey smooth, respectful, and convenient for everyone.
          </p>
        </div>
      </div>
      <div className='w-full  flex justify-between items-center font-semibold   '>
        <div className='w-[700px] h-[300px]' >
          <h3 className='text-2xl text-green-400 font-bold pt-4'> Yours Fav Meal</h3>
         <p className='text-gray-400 p-4'>
           As part of our tourist services, we offer personalized
          meal options based on each traveler’s preferences. Whether
          a guest prefers vegetarian, non-vegetarian, Jain, or regional
          cuisines, we ensure their food choices are respected and fulfilled
          . Meals can be pre-booked, and we coordinate with trusted food partners
          to provide fresh, hygienic, and tasty dishes during the journey
          or at stop points. Special dietary needs or allergies are also taken
          care of if informed in advance. Our goal is to make every tourist feel
          at home by serving the food they love, ensuring a more comfortable
          and satisfying travel experience.
         </p>
        </div>
        <div className='w-[400px] h-auto bg-gray-700 p-4 rounded-3xl  shadow-lg shadow-white/50'>
          <img src={image3} alt="" className='w-full h-full rounded-3xl' />
        </div>
      </div>
      <div className='w-full flex mt-20 justify-between items-center font-semibold '>
        <div className='w-[400px] h-auto   bg-gray-700 p-4 rounded-3xl  shadow-lg shadow-rose-600/50'>
          <img src={image4} alt="" className='w-full h-full rounded-3xl' />
        </div>
        <div className='w-[700px] h-[300px]' >
          <h3 className='text-2xl text-green-400 font-bold pt-4' >Club Car Avaliable</h3>
          <p className='text-gray-400 p-4'>
            Our bus service is not just about reaching destinations, but providing
          a complete travel experience. For the convenience of our passengers, we
          also arrange car facilities at major travel stops and tourist locations
          during the journey. These cars are safe, comfortable, and ideal for
          both individual and group travel. This added service allows passengers
          to explore nearby places easily without worrying about local transport.
          Our goal is to ensure a smooth and flexible journey, where passengers
          feel supported even after stepping off the bus. With us, travel is not
          just a trip — it’s a well-managed experience.
          </p>
        </div>
      </div>
      <div className='w-full mt-20 flex justify-between items-center font-semibold'>
        <div className='w-[700px] h-[300px]' >
          <h3 className='text-2xl text-green-400 font-bold pt-4'>Coffiee for Coffiee Lovers</h3>
        <p className='text-gray-400 p-4'>  We ensure that our passengers remain refreshed throughout their journey.
          That’s why we offer 24/7 coffee availability as a part of our onboard
          and station services. Whether it’s an early morning departure or a late
          -night arrival, hot and freshly brewed coffee is always ready to energize
          you. We believe that a good cup of coffee can make travel more relaxing
          and enjoyable. Our commitment to comfort goes beyond just transportation
          — it’s about creating a welcoming environment anytime, anywhere. With
          round-the-clock coffee service, we make sure our passengers always feel
          at home, no matter the time of travel.</p>
        </div>
        <div className='w-[400px] h-auto   bg-gray-700 p-4 rounded-3xl  shadow-lg shadow-white/50'>
          <img src={image5} alt="" className='w-full h-full rounded-4xl' />
        </div>
      </div>
      <div className='w-full mt-20 flex justify-between items-center font-semibold '>
        <div className='w-[400px] h-auto   bg-gray-700 p-4 rounded-3xl  shadow-lg shadow-cyan-500/50'>
          <img src={image6} alt="" className='w-full h-full rounded-3xl' />
        </div>
        <div className='w-[700px] h-[300px]' >
          <h3  className='text-2xl text-green-400 font-bold pt-4'>Tea, for Chai Lovers</h3>
       <p className='text-gray-400 p-4'>
           For our tea-loving passengers, we <sup>'</sup>ve got you covered too!
          Along with coffee, we also provide 24/7 tea availability
          to ensure everyone enjoys their preferred beverage during
          the journey. Whether you need a refreshing cup of tea in
          the morning or a calming sip late at night, our service
          is always ready. We understand that for many, tea is more
          than just a drink — it's comfort, routine, and relaxation.
          That’s why we’ve made it a priority to offer fresh, hot tea
          anytime. Your journey with us is not just about travel, but
          also about feeling at ease, every step of the way.
       </p>
        </div>
      </div>
      <div className='w-full mt-20 flex justify-between items-center font-semibold '>
        <div className='w-[700px] h-[300px]' >
          <h3 className='text-2xl text-green-400 font-bold pt-4'>The Macallan</h3>
        <p className='text-gray-400 '>
            For our tea-loving passengers, we <sup>'</sup>ve got you covered too!
          Along with coffee, we also provide 24/7 tea availability
          to ensure everyone enjoys their preferred beverage during
          the journey. Whether you need a refreshing cup of tea in
          the morning or a calming sip late at night, our service
          is always ready. We understand that for many, tea is more
          than just a drink — it's comfort, routine, and relaxation.
          That’s why we’ve made it a priority to offer fresh, hot tea
          anytime. Your journey with us is not just about travel, but
          also about feeling at ease, every step of the way.
        </p>
        </div>
        <div className='w-[400px] h-auto   bg-gray-700 p-4 rounded-3xl  shadow-lg shadow-white/50'>
          <img src={image7} alt="" className='w-full h-full' />
        </div>
      </div>
      <div className='w-full mt-20 flex justify-between items-center font-semibold '>
        <div className='w-[400px] h-auto   bg-gray-700 p-4 rounded-3xl  shadow-lg shadow-green-600/50'>
          <img src={image8} alt="" className='w-full h-full' />
        </div>
        <div className='w-[700px] h-[300px]' >
          <h3 className='text-2xl text-green-400 font-bold pt-4'>Whine for Couples </h3>
        <p className='text-gray-400 p-4'>
            For our tea-loving passengers, we <sup>'</sup>ve got you covered too!
          Along with coffee, we also provide 24/7 tea availability
          to ensure everyone enjoys their preferred beverage during
          the journey. Whether you need a refreshing cup of tea in
          the morning or a calming sip late at night, our service
          is always ready. We understand that for many, tea is more
          than just a drink — it's comfort, routine, and relaxation.
          That’s why we’ve made it a priority to offer fresh, hot tea
          anytime. Your journey with us is not just about travel, but
          also about feeling at ease, every step of the way.
        </p>
        </div>
      </div>
      <div className='w-full mt-20 flex justify-between items-center font-semibold '>
        <div className='w-[700px] h-[300px]' >
          <h3 className='text-2xl text-green-400 font-bold pt-4'>Medical Facalaty Avalible</h3>
       <p className='text-gray-400 p-4'>   For our tea-loving passengers, we <sup>'</sup>ve got you covered too!
          Along with coffee, we also provide 24/7 tea availability
          to ensure everyone enjoys their preferred beverage during
          the journey. Whether you need a refreshing cup of tea in
          the morning or a calming sip late at night, our service
          is always ready. We understand that for many, tea is more
          than just a drink — it's comfort, routine, and relaxation.
          That’s why we’ve made it a priority to offer fresh, hot tea
          anytime. Your journey with us is not just about travel, but
          also about feeling at ease, every step of the way.</p>
        </div>
        <div className='w-[400px] h-auto   bg-gray-700 p-4 rounded-3xl  shadow-lg shadow-white/50'>
          <img src={image9} alt="" className='w-full h-full rounded-2xl' />
        </div>
      </div>
      <div className='items-center'>
        <div className="w-full m-10 h-[4px] rounded bg-gradient-to-r from-yellow-400 to-purple-600 
              shadow-[0_60px_120px_rgba(255,215,0,0.3),0_80px_160px_rgba(138,43,226,0.3)]">
        </div>
        <Contact />
      </div>

    </div>

  )
}

export default Services




