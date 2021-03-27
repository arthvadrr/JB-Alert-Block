import { __ }                         from '@wordpress/i18n';
import Inspector                      from './inspector';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import INNER_BLOCKS_TEMPLATE          from './inner_blocks_template';
import './editor.scss';
import AlertIcon                      from './icons';

export default function Edit (  {attributes, setAttributes}  ) {

	const {
		      title,
		      hasTitle,
		      headingTag,
		      alertType,
		      currentIcon,
		      hasIcon,
		      invertColors,
	      } = attributes;

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
					title={title}
					hasTitle={hasTitle}
					headingTag={headingTag}
					alertType={alertType}
					hasIcon={hasIcon}
					invertColors={invertColors}
					setAttributes={setAttributes}
				/>
				{hasIcon &&
					<AlertIcon currentIcon={currentIcon}/>
				}
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
