module.exports = (Sequelize: any, instance: any) => {

    const Event = instance.define('events', {
        payload: {
            type: Sequelize.JSON,
            allowNull: false,
            default: null
        },
        alert_id: Sequelize.UUID,
        task_instance_id: Sequelize.STRING(255),
        visit_id: Sequelize.UUID,
        caregiver_id: Sequelize.UUID,
        payload_as_text: Sequelize.TEXT,
        rejected_event_id: Sequelize.STRING(255),
        observation_event_id: Sequelize.STRING(255),
        timestamp: Sequelize.STRING(50),
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        event_type: Sequelize.STRING(50),
        care_recipient_id: Sequelize.UUID
    });

    return Event;
}