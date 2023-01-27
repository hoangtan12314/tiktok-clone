import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_100x100.jpeg?x-expires=1674979200&x-signature=yTlCpvaJXKtrEJzbJFMWjwh44kU%3D" alt='Ngo Ngoc Hoa'/>
        <div className={cx('info')}>
            <h4 className={cx('user-name')}>
                hoa_2309
                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>
            </h4>
            <span className={cx('name')}>Ngô Ngọc Hòa</span>
        </div>
    </div>;
}

export default AccountItem;
