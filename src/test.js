import { useRecoilState, useRecoilValue } from 'recoil';
import { textState } from './store/store';
import { useNavigate } from 'react-router-dom';
export default function Test() {
  const navigate = useNavigate();

  const [c, d] = useRecoilState(textState);
  //   const = useRecoilValue(textState);

  const onrecoil = () => {
    // event.defaultPrevent();
    d('초기값2');
  };

  return (
    <>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        main
      </button>
      <button
        onClick={() => {
          onrecoil();
        }}
      >
        값 변경
      </button>
      <div>{c}</div>
    </>
  );
}
