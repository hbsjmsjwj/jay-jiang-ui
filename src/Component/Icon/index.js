import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';
const Component = function(props){
    return(
        <div>jayui-icon</div>
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