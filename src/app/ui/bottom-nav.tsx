import NavLinks from "./nav-links";


export default function BottomNav() {
    return (
        <div className="flex justify-between w-full bg-black p-5 fixed bottom-0">
            <NavLinks />
        </div>
    );
}
