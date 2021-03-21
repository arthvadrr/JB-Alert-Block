import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit                  from './edit';
import save                  from './save';

registerBlockType( 'create-block/jb-alert-block', {
	apiVersion : 2,
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
