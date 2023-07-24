import $ from 'jquery';

$(function () {
  let p1 = $('<p>').text('Holberton Dashboard');
  let p2 = $('<p>').text('Dashboard data for the students');
  let p3 = $('<p>').text('Copyright - Holberton School');

  $('body').append(p1, p2, p3);
});
