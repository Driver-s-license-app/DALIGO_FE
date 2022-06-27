
// 필수 정보 입력 화면
const EssentialInfo = (props) => {
    return (
        <>
        <header>
            <button onClick={props.back}>
                {"<"}
            </button>
            {'필수 정보'}
        </header>
        <div>
            <div>
                <label>닉네임</label>
                <input type="text"/>
                <button>랜덤 돌려</button>
            </div>
            <div>
                <label>연령대</label>
            </div>
            <div>
                <label>지역</label>
            </div>
        </div>
        <button onClick={props.next}>완료</button>
        </>
    )
}

export default EssentialInfo;