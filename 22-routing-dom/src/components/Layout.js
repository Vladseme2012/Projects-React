import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <NavLink to="/layout">Layout</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/information">Information</NavLink>
      </header>
      <Outlet />
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque
          reiciendis fugit praesentium! Quod inventore nihil reiciendis
          cupiditate, iusto quaerat doloribus! Iusto natus commodi, quas dolorem
          amet placeat corrupti veniam.
        </span>
        <span>
          Corporis distinctio vel nam totam incidunt ipsam, consequuntur, culpa
          dolorum sit nihil voluptates omnis consectetur autem ea vitae,
          expedita eum tempore facilis aperiam doloremque quo velit obcaecati?
          Quaerat, sint placeat?
        </span>
        <span>
          Natus nesciunt quod quis quia labore amet atque inventore harum
          aliquam? Nemo aspernatur, praesentium voluptatibus velit qui doloribus
          temporibus et, quidem mollitia doloremque ab pariatur quam similique
          laborum adipisci fuga.
        </span>
        <span>
          Eligendi, tempore blanditiis pariatur quisquam corporis ex, et
          architecto ut sapiente delectus quis. Beatae cum amet a deserunt
          dolores, natus at in voluptatibus minima explicabo praesentium aliquam
          nam sequi. Magnam!
        </span>
        <span>
          Cum sint obcaecati ut aliquam necessitatibus distinctio sequi optio
          unde recusandae eum, veniam architecto assumenda at odio nesciunt
          iusto velit? Eaque minus voluptas debitis laboriosam, ad sit. Numquam,
          voluptas itaque!
        </span>
      </p>
    </>
  );
}

export default Layout;
