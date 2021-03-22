import { __ }                         from '@wordpress/i18n';
import Inspector                      from './inspector';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import INNER_BLOCKS_TEMPLATE          from './inner_blocks_template';
import { useState }                   from '@wordpress/element';
import './editor.scss';

export default function Edit () {

	const [ textAlignment, setTextAlignment ] = useState( [] );
	const [ hasTitle, setHasTitle ] = useState( true );
	const [ title, setTitle ] = useState( '' );
	const [ headingLevel, setHeadingLevel ] = useState( 2 );
	const [ alertType, setAlertType ] = useState( 'default' );

	let HeadingTag = `h${headingLevel}`;

	return (
		<div {...useBlockProps()}>
			<div className={`jb-alert alert-${alertType}`}>
				<Inspector
					title={title}
					setTitle={setTitle}
					hasTitle={hasTitle}
					setHasTitle={setHasTitle}
					headingLevel={headingLevel}
					setHeadingLevel={setHeadingLevel}
					textAlignment={textAlignment}
					setTextAlignment={setTextAlignment}
					alertType={alertType}
					setAlertType={setAlertType}
				/>
				{hasTitle &&
				<HeadingTag>{title === '' ? 'Enter an alert title...' : title}</HeadingTag>
				}
				<InnerBlocks
					template={INNER_BLOCKS_TEMPLATE}
					templateLock="all"
				/>
			</div>
		</div>
	);
}
