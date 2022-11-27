import { Link, useLocation, useNavigate } from 'react-router-dom';
import courses from '../Data/Courses.js';
import { useState, useEffect } from 'react';
import queryString from 'query-string';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey();
      setSortedCourses([...courses])
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h2
        style={{
          color: '#ff8c00',
          textAlign: 'center',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        {sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}
      </h2>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
