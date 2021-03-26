import { __ }                         from '@wordpress/i18n';
import Inspector                      from './inspector';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import INNER_BLOCKS_TEMPLATE          from './inner_blocks_template';
import { useState }                   from '@wordpress/element';
import './editor.scss';
import AlertIcon                      from './icons';

export default function Edit () {

	const [ hasTitle, setHasTitle ] = useState( true );
	const [ title, setTitle ] = useState( '' );
	const [ headingTag, setHeadingTag ] = useState( 'strong' );
	const [ alertType, setAlertType ] = useState( 'default' );
	const [ invertColors, setInvertColors ] = useState( false );
	const [ hasIcon, setHasIcon ] = useState( true );
	const [ currentIcon, setCurrentIcon ] = useState( 'bullhorn' );

	const setJBAlertClassList = () => {
		let classArr = [ 'jb-block', `alert-${alertType}` ];
		if ( invertColors ) {
			classArr.push( 'alert-dark' );
		}

		return classArr.join( ' ' );
	};

	const HeadingTag = headingTag;

	return (
		<div {...useBlockProps()}>
			<div className={setJBAlertClassList()}>
				<Inspector
					//title={title}
					//setTitle={setTitle}
					hasTitle={hasTitle}
					setHasTitle={setHasTitle}
					//headingTag={headingTag}
					//setHeadingTag={setHeadingTag}
					//alertType={alertType}
					//setAlertType={setAlertType}
					invertColors={invertColors}
					setInvertColors={setInvertColors}
					hasIcon={hasIcon}
					setHasIcon={setHasIcon}
					//currentIcon={currentIcon}
					//setCurrentIcon={setCurrentIcon}
				/>
				<AlertIcon icon={currentIcon}/>
				<div className="jb-block-inner-content">
					{hasTitle &&
					<HeadingTag>{title === '' ? 'Enter an alert title...' : title}</HeadingTag>
					}
					<InnerBlocks
						template={INNER_BLOCKS_TEMPLATE}
						templateLock="all"
					/>
				</div>
			</div>
		</div>
	);
}
