import React from "react"
import PropTypes from "prop-types"

class M_header extends React.Component {
    constructor(props) {
        super(props);
        this.userLink = this.props.userLink;
        this.logo = this.props.logo;
    }

    authenticationCheck() {
        if (this.props.authentication) {
            return (
                <div className={'header-row__authentication'}>
                    <a href='/users/sign_in' className={'button button-sign-in'}>Войти</a>
                    <a href='/users/sign_up' className={'button button-sign-up'}>Зарегистрироваться</a>
                </div>
            )
        } else {
            return (
                <div className={'header-row__authentication'}>
                    <a href={`/users/${this.userLink.id}/`} className={'button button-username'}>{this.userLink.username}</a>
                    {/*<a rel="nofollow" data-method={'delete'} href='users/sign_out' className={'button button-sign-out'}>Выход</a>*/}
                    <div className={"user-avatar"}/>
                </div>
            )
        }
    }

    render() {

    return (
        <div className={'container-header'}>

          <div className={"header-row"}>
            <div className={"left"}>
                <div className={"header-row__logo"}>
                    <img src='/assets/logo-156824fa44c19b6588f73fd1a634424b40a6f09114715b0c4f723adb78c0275e.svg' />
                </div>
                <div className={"header-row__link-list"}>
                    <ul>
                        <li><a href='/home'>Главная</a></li>
                        <li><a href='/about'>О нас</a></li>
                        <li><a href='/posts'>Туры</a></li>
                    </ul>
                </div>
            </div>
              {this.authenticationCheck()}
          </div>

        </div>
    );
  }
}

M_header.propTypes = {
  users: PropTypes.array
};
export default M_header