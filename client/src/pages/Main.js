import './Main.css';

function Main() {
  return (
    <div>
      <div id='header'>
        <div id='header_container'>
          <div className='logo'>outstargram</div>
          <div id='search'></div>
          <div id='menu'>
            <div className='icon' style={{backgroundImage: 'url(/icons/home-2.png)'}}></div>
            <div className='icon' style={{backgroundImage: 'url(/icons/email-2.png)'}}></div>
            <div className='icon' style={{backgroundImage: 'url(/icons/plus.png)'}}></div>
            <div className='icon' style={{backgroundImage: 'url(/icons/explore.png)'}}></div>
            <div className='icon' style={{backgroundImage: 'url(/icons/heart-2.png)'}}></div>
            <div className='icon' style={{backgroundImage: 'url(/icons/user.png)'}}></div>
          </div>
        </div>
      </div>
      <div id='body'>
        <div id='story_container'>
          <div className='story'>
            <div className='story_image'></div>
            <div className='story_user'>h__g</div>
          </div>
          <div className='story'>
            <div className='story_image'></div>
            <div className='story_user'>hj</div>
          </div>
        </div>
        
        <div className='post'>
          <div className='post_header'>
            <div className='post_user_image'></div>
            <div>
              <div className='post_user'>hg_ohh</div>
              <div className='post_location'>행궁동</div>
            </div>
            <div className='post_option'></div>
          </div>
          <img src='http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg' className='post_image'></img>
          <div className='post_menu'>
            <div className='icon post_icon' style={{backgroundImage: 'url(/icons/heart-2.png)'}}></div>
            <div className='icon post_icon' style={{backgroundImage: 'url(/icons/chat.png)'}}></div>
            <div className='icon post_icon' style={{backgroundImage: 'url(/icons/email-2.png)'}}></div>
            <div className='icon' style={{backgroundImage: 'url(/icons/save-instagram.png)',   position: 'relative', left: '435px'}}></div>
          </div>
          <div className='comment_container'>
            <div className='post_like'><div className='bold'>hsjsjq</div>님 외&nbsp;<div className='bold'>여러 명</div>이 좋아합니다.</div>
            <div className='post_content'><div className='bold'>h__g</div>&nbsp;고양이 귀여워</div>
            <div className='comment'><div style={{display: 'flex'}}><div className='bold'>jjdkk</div>&nbsp;@h__g 귀엽네</div><div className='comment_like'></div></div>
            <div className='comment'><div style={{display: 'flex'}}><div className='bold'>h__g</div>&nbsp;인정</div><div className='comment_like'></div></div>
            <div className='comment'><div style={{display: 'flex'}}><div className='bold'>asdjjj1k</div>&nbsp;난 즐거워~</div><div className='comment_like'></div></div>
          </div>
          <div className='post_date'>6일 전</div>
          <div className='comment_write_container'>
            <div className='icon' style={{backgroundImage: 'url(/icons/happiness.png)', marginTop: 0}}></div>
            <div className='comment_input'>댓글 달기...</div>
            <div className='comment_button'>게시</div>
          </div>
        </div>

        <div className='post'>
          <div className='post_header'>
            <div className='post_user_image'></div>
            <div>
              <div className='post_user'>hg_ohh</div>
              <div className='post_location'>행궁동</div>
            </div>
            <div className='post_option'></div>
          </div>
          <img src='http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg' className='post_image'></img>
          <div className='post_menu'>
            <div className='icon post_icon' style={{backgroundImage: 'url(/icons/heart-2.png)'}}></div>
            <div className='icon post_icon' style={{backgroundImage: 'url(/icons/chat.png)'}}></div>
            <div className='icon post_icon' style={{backgroundImage: 'url(/icons/email-2.png)'}}></div>
            <div className='icon' style={{backgroundImage: 'url(/icons/save-instagram.png)',   position: 'relative', left: '435px'}}></div>
          </div>
          <div className='comment_container'>
            <div className='post_like'><div className='bold'>hsjsjq</div>님 외&nbsp;<div className='bold'>여러 명</div>이 좋아합니다.</div>
            <div className='post_content'><div className='bold'>h__g</div>&nbsp;고양이 귀여워</div>
            <div className='comment'><div style={{display: 'flex'}}><div className='bold'>jjdkk</div>&nbsp;@h__g 귀엽네</div><div className='comment_like'></div></div>
            <div className='comment'><div style={{display: 'flex'}}><div className='bold'>h__g</div>&nbsp;인정</div><div className='comment_like'></div></div>
            <div className='comment'><div style={{display: 'flex'}}><div className='bold'>asdjjj1k</div>&nbsp;난 즐거워~</div><div className='comment_like'></div></div>
          </div>
          <div className='post_date'>6일 전</div>
          <div className='comment_write_container'>
            <div className='icon' style={{backgroundImage: 'url(/icons/happiness.png)', marginTop: 0}}></div>
            <div className='comment_input'>댓글 달기...</div>
            <div className='comment_button'>게시</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
