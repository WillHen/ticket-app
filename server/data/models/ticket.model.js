module.exports = {
	Ticket: {
		_id: 'string',
		url: 'string',
		external_id: 'string',
		created_at: 'date',
		type: 'string',
		subject: 'string',
		description: 'string',
		priority: 'string',
		status: 'string',
		submitter_id: 'number',
		assignee_id: 'number',
		organization_id: 'number',
		tags: 'Array',
		has_incidents: 'boolean',
		due_at: 'string',
		via: 'string'
	}
};
