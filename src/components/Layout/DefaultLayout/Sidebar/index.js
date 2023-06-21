import styles from './Sidebar.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <h2>sidebar</h2>
    </aside>
  );
}

export default Sidebar;
