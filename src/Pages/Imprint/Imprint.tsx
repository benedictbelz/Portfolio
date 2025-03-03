import * as React from 'react';
import { Scrollbar } from '../../Components/Scrollbar/Scrollbar';
import { Browser } from '../../@types/browser';
import './Imprint.scss';

interface Props {
    browser: Browser;
}

export class Imprint extends React.Component<Props,{}> {
	render() {
		return (
            <Scrollbar browser={this.props.browser} color='White' id='imprint'>
                <div className='wrapper'>
                    <h1>
                        Information according to<br/>
                        §5 TMG and §55 RStV
                    </h1>
                    <p id='address'></p>
                    <h2>Contact</h2>
                    <p id='data'></p>
                    <h2>Content</h2>
                    <p>
                        The content of my page has been created with the utmost care. However, I cannot guarantee the contents accuracy, completeness or topicality. According to statutory provisions, I am furthermore responsible for my own content on this web page. In this matter, please note that I am not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. My obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act.
                    </p>
                    <h2>Links</h2>
                    <p>
                        Responsibility for the content of external links, to web pages of third parties, lies solely with the operators of the linked pages. No violations were evident to me at the time of linking. Should any legal infringement become known to me, I will remove the respective link immediately.
                    </p>
                    <h2>Copyright</h2>
                    <p>
                        My web page and its content is subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing work, subject to copyright protection on my web page, requires the prior consent of the respective owner of the rights. Individual reproduction of a work is only allowed for private use. The material from this pages is copyrighted and any unauthorized use may violate copyright laws.
                    </p>
                </div>
            </Scrollbar>
        );
	}
}
