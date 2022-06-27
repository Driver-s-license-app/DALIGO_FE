import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LoginStart, EssentialInfo, RegisterSucceed } from './login_pages';
//total header - title

const Login = () => {

    // 가입 페이지 상태를 관리 (첫번째 페이지, 두번째 페이지 등)
    const [login_phase, setLoginPhase] = useState(0);
    let Container; // 화면에 보여줄 페이지 내용
    const navigate = useNavigate(); // 페이지 이동

    switch (login_phase) {
        case 0:
            Container = LoginStart;
            break;
        case 1:
            Container = EssentialInfo;
            break;
        case 2:
            Container = RegisterSucceed;
            break;
        case 3:
            navigate('/');
            break;
        default:
            setLoginPhase(0);
            break;
    }

    return(
        <>
            {<Container next={() => {setLoginPhase(login_phase + 1)}} back={() => {setLoginPhase(login_phase - 1)}}/>}
        </>
    )
}

export default Login;