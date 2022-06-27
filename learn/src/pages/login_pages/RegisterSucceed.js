

// 가입완료 화면
const RegisterSucceed = (props) => {
    return (
        <>
        <header>
            <button onClick={props.back}>
                {'<'}
            </button>
        </header>
        <div>뚝딱 가입완료!</div>
        <button onClick={props.next}>시작하기</button>
        </>
    )
}

export default RegisterSucceed;