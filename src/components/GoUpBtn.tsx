type props = {
  onButtonClick: (id: string) => void;
  changeNavActivePage: (page: number) => void;
};

const GoUpBtn: React.FC<props> = ({ onButtonClick, changeNavActivePage }) => {
  return (
    <>
      <button
        onClick={() => {
          onButtonClick("top-page");
          changeNavActivePage(0);
        }}
        className="button go_up_btn"
      >
        ↑
      </button>
    </>
  );
};

export default GoUpBtn;
