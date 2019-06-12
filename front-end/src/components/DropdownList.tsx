import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DropdownButton, Dropdown } from 'react-bootstrap';

interface DropdownListProps {
    recipients: Array<any>;
    changeHandler: any;
    listValue: string;
}

const DropdownList = (props: DropdownListProps) => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Select Recipient" onChange={props.changeHandler} value={props.listValue}>
            {props.recipients.map((recipient: any, index: number) => {
                return <Dropdown.Item key={index}>{recipient.DISTINCT}</Dropdown.Item>;
            })}
        </DropdownButton>
    );
};

DropdownList.propTypes = {
    recipients: PropTypes.array.isRequired,
    changeHandler: PropTypes.func.isRequired,
    listValue: PropTypes.string.isRequired,
};

export default DropdownList;