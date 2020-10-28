import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
const QuienesSomos = () => {
    const [key, setKey] = useState('Historia');
    return (
        <div>
            <Tabs
                id="QS-controlled-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                transition={false}
            >
                <Tab eventKey="Historia" title="Historia">
                    <p className="m-3">Benscorp nace en 2003 como una empresa consultora, enfocada en solucionar y asesorar
                al mercado salvadoreño ante los distintos problemas asociados con la correcta ejecución
                y mantenimiento, a mediano y a largo plazo, de un modelo de negocios. Sean estas dificultades:
                legales, tributarias o relacionadas a estrategias ineficientes de negocios o innovación; poseemos
                al personal necesario, altamente capacitado, para ofrecer una visión integral, y a su vez,
                una correcta resolución de las mismas.</p>
                </Tab>
                <Tab eventKey="Mision" title="Mision">
                <p className="m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel,
                malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue,
                placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra
                dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci
                semper, rhoncus ligula. Vivamus scelerisque.</p>
                </Tab>
                <Tab eventKey="Vision" title="Vision">
                <p className="m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel,
                malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue,
                placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra
                dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci
                semper, rhoncus ligula. Vivamus scelerisque.</p>
                </Tab>

            </Tabs>
        </div>
    )
}

export default QuienesSomos