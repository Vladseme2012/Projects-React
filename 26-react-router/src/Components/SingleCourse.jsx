import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../Data/Courses';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  
  const courseObject = courses.find(
    (course) => course.slug === params.courseSlag
  );

  useEffect(() => {
    if (!courseObject) {
      navigate('..', { relative: 'path' });
    }
  }, [courseObject, navigate]);

  // if (!courseObject) {
  //   return <NotFound />;
  // }

  return (
    <>
      <h1>{courseObject?.title}</h1>
      <h2>{courseObject?.slug}</h2>
      <h3>{courseObject?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
