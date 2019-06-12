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
        <DropdownButton
            id="dropdown-basic-button"
            title="Select Recipient"
            onSelect={props.changeHandler}
        >
            {props.recipients.map((recipient: any, index: number) => {
                return (
                    <Dropdown.Item
                        key={index}
                        eventKey={recipient.DISTINCT}
                    >
                        {recipient.DISTINCT}
                    </Dropdown.Item>);
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