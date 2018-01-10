$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/970756.json',
    dataType: 'jsonp',
    success: function(response) {
      addCoures(response.courses.completed);
    }
  });

  function addCoures(courses) {

    courses.forEach(function(course) {
      console.log(course);
      var $badges = $('#badges');

      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />',{
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        href: course.url,
        'class': 'btn btn-primary',
        target: '_blank',
        text: 'See Course'
      }).appendTo($course);

    });
  }

});
