export const Columns = {
	User: [
		'url',
		'external_id',
		'name',
		'alias',
		'created_at',
		'active',
		'verified',
		'shared',
		'locale',
		'timezone',
		'last_login_at',
		'email',
		'phone',
		'signature',
		'tags',
		'suspended',
		'role'
	],
	Ticket: [
		'_id',
		'url',
		'external_id',
		'created_at',
		'type',
		'subject',
		'description',
		'priority',
		'status',
		'submitter_id',
		'assignee_id',
		'organization_id',
		'tags',
		'has_incidents',
		'due_at',
		'via'
	],
	Organization: [
		'_id',
		'url',
		'external_id',
		'name',
		'domain_names',
		'created_at',
		'details',
		'shared_tickets',
		'tags'
	]
};
