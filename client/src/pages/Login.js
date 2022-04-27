import './Login.css'

function Login() {
  return(
    <div>
      <div className='signup_login_body'>
        <div className='signup_login_container'>
          <div className='logo'>outstargram</div>
          <form className='signup_login_input_container' style={{marginTop: '20px'}}>
            <input placeholder='전화번호, 사용자 이름 또는 이메일'/>
            <input placeholder='비밀번호'/>
            <button type='submit'>로그인</button>
          </form>
          <div className='signup_login_or_container'>
            <div className='signup_login_or_line'></div>
            <div className='signup_login_or'>또는</div>
            <div className='signup_login_or_line'></div>
          </div>
          <div className='facebook_login' style={{marginBottom: '10px'}}>가입하지 않고 구경하기</div>          
          <div className='facebook_login'>Facebook으로 로그인</div>
          <a className='find_password' href='#'>비밀번호를 잊으셨나요?</a>
        </div>
        <div className='signup_login_router_container'>
          <div>계정이 없으신가요?&nbsp;</div>
          <a href="/signup">가입하기</a>
        </div>
        <div className='project_detail_container'>
          <div>프로젝트의 상세 설명을 읽어보세요.</div>
          <a href='https://github.com/hhhroot/msa-outstargram'>github</a>
        </div>
      </div>
      <div className='footer'>&copy; Copyright 2022 by hhhroot</div>
    </div>
  )
}

export default Login;