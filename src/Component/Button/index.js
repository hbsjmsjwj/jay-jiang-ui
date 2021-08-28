import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';
//type 'primary' | 'ghost' | 'dashed' | 'danger';
const Component = function (props) {
    const { type } = props
    const classes = ['jayui_btn'];
    if (type) {
        if (type === 'primary') {
            classes.push(classes[0] + '_' + type)
        }
        if (type === 'ghost') {
            classes.push(classes[0] + '_' + type)
        }
        if (type === 'dashed') {
            classes.push(classes[0] + '_' + type)
        }
        if (type === 'danger') {
            Î
            classes.push(classes[0] + '_' + type)
        }
    }

    const classNames = classnames(classes, props.className);

    return (
        <button className={classNames}>{props.children}</button>
    )
}
Component.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string
}
Component.defaultProps = {
    className: '',
    type: 'primary'
}
export default Component
//https://gitee.com/joeslee/ant-design