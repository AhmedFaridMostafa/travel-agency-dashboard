import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import { useRef } from "react";
import NavItems from "./NavItems";

function MobileSidebar() {
  const sidebarRef = useRef<SidebarComponent>(null);
  function toggleSidebar() {
    if (sidebarRef.current) {
      sidebarRef.current.toggle();
    }
  }
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
          <h1>Tourvisto</h1>
        </Link>

        <button type="button" onClick={toggleSidebar}>
          <img
            src="/assets/icons/menu.svg"
            alt="toggle menu"
            className="size-7"
          />
        </button>
      </header>
      <SidebarComponent
        width={270}
        ref={sidebarRef}
        created={() => {
          sidebarRef.current && sidebarRef.current.hide();
        }}
        closeOnDocumentClick={true}
        showBackdrop={true}
      >
        <NavItems handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
}

export default MobileSidebar;
