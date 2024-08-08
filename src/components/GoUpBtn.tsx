type props = {
  onButtonClick: (id: string) => void;
  changeNavActivePage: (page: number) => void;
};

const GoUpBtn: React.FC<props> = ({ onButtonClick, changeNavActivePage }) => {
  return (
    <>
      <button
        onClick={() => {
          onButtonClick("navbar");
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
