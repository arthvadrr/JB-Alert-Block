import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit                  from './edit';
import save                  from './save';

registerBlockType( 'create-block/jb-alert-block', {
	apiVersion : 2,
	attributes: {
		title: {
			type: 'string',
			default: '',
		},
		hasTitle: {
			type: 'bool',
			default: false,
		},
		headingTag: {
			type: 'string',
			default: 'strong',
		},
		alertType: {
			type: 'string',
			default: 'default',
		},
		currentIcon: {
			type: 'string',
			default: 'bullhorn',
		},
		hasIcon: {
			type: 'bool',
			default: false,
		},
		invertColors: {
			type: 'bool',
			default: false,
		}
	},
	edit       : Edit,
	save,
	supports   : {
		align : [
			'left',
			'right',
			'full',
		],
	},
} );
