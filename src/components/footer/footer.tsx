export const Footer = () => {
    return (
        <footer className="w-full bg-grey0 h-20">
            <div className="container flex justify-between items-center w-full h-full">
                <h2 className="text-3xl font-bold text-whiteFixed">
                    Motors <span className="text-lg">Shop</span>
                </h2>
                <p className="text-whiteFixed text-sm">&copy; 2023 Todos os direitos reservados.</p>
                <button type="button" className="bg-grey1 rounded w-[53px] h-[50px] text-whiteFixed font-semibold text-[2rem] flex justify-center items-center pt-[10px]">
                    ^
                </button>
            </div>
        </footer>
    );
};