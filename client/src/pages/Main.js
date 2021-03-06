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
              <div className='post_location'>νκΆλ</div>
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
            <div className='post_like'><div className='bold'>hsjsjq</div>λ μΈ&nbsp;<div className='bold'>μ¬λ¬ λͺ</div>μ΄ μ’μν©λλ€.</div>
            <div className='post_content'><div className='bold'>h__g</div>&nbsp;κ³ μμ΄ κ·μ¬μ</div>
            <div className='comment'><div style={{display: 'flex'}}><div className='bold'>jjdkk</div>&nbsp;@h__g κ·μ½λ€</div><div className='comment_like'></div></div>
            <div className='comment'><div style={{display: 'flex'}}><div className='bold'>h__g</div>&nbsp;μΈμ </div><div className='comment_like'></div></div>
            <div className='comment'><div style={{display: 'flex'}}><div className='bold'>asdjjj1k</div>&nbsp;λ μ¦κ±°μ~</div><div className='comment_like'></div></div>
          </div>
          <div className='post_date'>6μΌ μ </div>
          <div className='comment_write_container'>
            <div className='icon' style={{backgroundImage: 'url(/icons/happiness.png)', marginTop: 0}}></div>
            <div className='comment_input'>λκΈ λ¬κΈ°...</div>
            <div className='comment_button'>κ²μ</div>
          </div>
        </div>

        <div className='post'>
          <div className='post_header'>
            <div className='post_user_image'></div>
            <div>
              <div className='post_user'>hg_ohh</div>
              <div className='post_location'>νκΆλ</div>
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
            <div className='post_like'><div className='bold'>hsjsjq</div>λ μΈ&nbsp;<div className='bold'>μ¬λ¬ λͺ</div>μ΄ μ’μν©λλ€.</div>
            <div className='post_content'><div className='bold'>h__g</div>&nbsp;κ³ μμ΄ κ·μ¬μ</div>
            <div className='comment'><div style={{display: 'flex'}}><div className='bold'>jjdkk</div>&nbsp;@h__g κ·μ½λ€</div><div className='comment_like'></div></div>
            <div className='comment'><div style={{display: 'flex'}}><div className='bold'>h__g</div>&nbsp;μΈμ </div><div className='comment_like'></div></div>
            <div className='comment'><div style={{display: 'flex'}}><div className='bold'>asdjjj1k</div>&nbsp;λ μ¦κ±°μ~</div><div className='comment_like'></div></div>
          </div>
          <div className='post_date'>6μΌ μ </div>
          <div className='comment_write_container'>
            <div className='icon' style={{backgroundImage: 'url(/icons/happiness.png)', marginTop: 0}}></div>
            <div className='comment_input'>λκΈ λ¬κΈ°...</div>
            <div className='comment_button'>κ²μ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
