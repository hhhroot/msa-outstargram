import './Signup.css';

function Signup() {
  return(
    <div>
      <div className='signup_login_body'>
        <div className='signup_login_container'>
          <div className='logo'>outstargram</div>
          <div className='login_content'>친구들의 사진과 동영상을 보려면 가입하세요.</div>
          <div className='facebook_login'>Facebook으로 로그인</div>
          <div className='signup_login_or_container'>
            <div className='signup_login_or_line'></div>
            <div className='signup_login_or'>또는</div>
            <div className='signup_login_or_line'></div>
          </div>
          <form className='signup_login_input_container'>
            <input placeholder='휴대폰 번호 또는 이메일 주소'/>
            <input placeholder='성명'/>
            <input placeholder='아이디'/>
            <input placeholder='비밀번호'/>
            <button type='submit'>가입</button>
          </form>
        </div>
        <div className='signup_login_router_container'>
          <div>계정이 있으신가요?&nbsp;</div>
          <a href="/">로그인</a>
        </div>
        <div className='project_detail_container'>
          <div>프로젝트의 상세 설명을 읽어보세요.</div>
          <a href='https://github.com/hhhroot/msa-outstargram'>github</a>
        </div>
      </div>
      <div className='footer'>&copy; Copyright 2022 by hhhroot</div>
    </div>
  );
}

export default Signup;
