let addedCourses = [ 
    { 
      id: 6, 
      title: "PHP Tutorial", 
      rating: 3, 
    }, 
    { 
      id: 7, 
      title: "C# Tutorial", 
      rating: 2, 
    }, 
    { 
      id: 8, 
      title: "Docker Tutorial", 
      rating: 3.8, 
    } 
  ]; 
  let filteredCourse=addedCourses.filter(courses => courses.rating <4);
  let courseTitle=filteredCourse.map( courses =>courses.id +"-"+courses.title +"-"+courses.rating);
  console.log(courseTitle);