
// Card.jsx
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({ course, likedCourses, setLikedCourses }) => {

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className='bg-bgDark bg-opacity-80 w-[300px] border-gray-700 rounded-md overflow-hidden hover:scale-105 transition-all duration-300 '>
      <div className='relative border-gray-800'>
        <img src={course.image.url} alt={course.title} />
        <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />}
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-black  text-lg font-semibold leading-6'>{course.title}</p>
        <p className='mt-2 text-black'>
          {course.description.length > 100
            ? course.description.substring(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
