import React from 'react';
import { Table } from 'reactstrap';
import { GiMedicalPack } from 'react-icons/gi';
import { FaUserMd, FaAmbulance } from 'react-icons/fa';
import { AiFillMedicineBox, AiOutlineCheck } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
const Tablegrid = (props) => {
	const { t, i18n } = useTranslation();
	return (
		<div className=" container mb-5 ">
			<div className="row">
				<div className="col-sm-12 col-md-4 col-lg-4">
					<h4>
						{t('QS')} <br />
						<br />{' '}
					</h4>
					<p className="text-left">{t('QSM')}</p>
					<button type="button" className="btn btn-success float-left mt-3">
						{' '}
						<a href="/services">{t('CO')}</a>
					</button>
				</div>

				<div className="col-sm-12 col-md-4 col-lg-4">
					<div style={{ display: 'flex' }}>
						<div>
							<AiOutlineCheck size={28} />
						</div>
						<div style={{ marginLeft: '10px' }}>
							<h4>
								{t('EX')} <br />
								<br />
							</h4>
							<p>{t('EXM')}</p>
						</div>
					</div>
					<div style={{ display: 'flex', marginTop: '15px' }}>
						<div>
							<AiOutlineCheck size={28} />
						</div>
						<div style={{ marginLeft: '10px' }}>
							<h4>
								{t('T')} <br />
								<br />
							</h4>
							<p>{t('TM')}</p>
						</div>
					</div>
				</div>

				<div className="col-sm-12 col-md-4 col-lg-4">
					<div style={{ display: 'flex' }}>
						<div>
							<AiOutlineCheck size={28} />
						</div>
						<div style={{ marginLeft: '10px' }}>
							<h4>
								{t('CD')} <br />
								<br />
							</h4>
							<p>{t('CDM')}</p>
						</div>
					</div>
					<div style={{ display: 'flex', marginTop: '15px' }}>
						<div>
							<AiOutlineCheck size={28} />
						</div>
						<div style={{ marginLeft: '10px' }}>
							<h4>
								{t('CD')} <br />
								<br />
							</h4>
							<p>{t('CDM')}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tablegrid;
