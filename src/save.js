import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ __(
				'Jb Alert Block – hello from the saved content!',
				'jb-alert-block'
			) }
		</p>
	);
}
