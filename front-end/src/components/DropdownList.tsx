import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DropdownButton, Dropdown } from 'react-bootstrap';

interface DropdownListProps {
    recipients: Array<any>;
}

const DropdownList = (props: DropdownListProps) => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            {props.recipients.map((recipient: any, index: number) => {
                return <Dropdown.Item key={index}>{recipient.DISTINCT}</Dropdown.Item>;
            })}
        </DropdownButton>
    );
};

DropdownList.propTypes = {
    recipients: PropTypes.array.isRequired,
};

export default DropdownList;