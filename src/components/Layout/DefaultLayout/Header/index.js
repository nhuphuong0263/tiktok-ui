import classnames from 'classnames/bind';
import styles from './Header.module.scss';

console.log('styles', styles);
const cx = classnames.bind(styles);

function Header() {
  // return <h2 className={styles.postItem}>Header</h2>;
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>header</div>
    </header>
  );
}

export default Header;
