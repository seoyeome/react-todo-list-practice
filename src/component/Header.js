import HeaderCSS from './Header.module.css'

export default function Header(props) {

  return(
    <div>
      <h1 className={ HeaderCSS.title}>{ props.children }</h1>
    </div>
  );
}
