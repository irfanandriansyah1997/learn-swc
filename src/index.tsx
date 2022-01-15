import type { FC } from 'react';
import ReactDOM from 'react-dom';

/**
 * Sample Apps
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 2022.01.15
 */

const App: FC = () => <div>Hello World</div>;

ReactDOM.render(<App />, document.querySelector('#root'));
