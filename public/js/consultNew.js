/**
 * Created by wangchaofan on 15/11/13.
 */
$(function() {
  var answerOrignHeight = $('.answer').eq(0).height();
  $('#qa_list').on('click', '.btn-expend', function() {
    var $this = $(this);
    var $answer =  $this.parent().find('.answer');
    var $answer_p =  $this.parent().find('.answer p');
    if($this.hasClass('expended')) {
      $this.removeClass('expended').find('span').text('展开');
      $answer.height(answerOrignHeight);
    } else {
      $this.addClass('expended').find('span').text('收起');
      $answer.height($answer_p.height());
    }
  });
});